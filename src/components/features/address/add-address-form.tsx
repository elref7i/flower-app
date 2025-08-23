"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step1Schema, step2Schema, fullSchema, FormData } from "@/lib/schema/address.schema";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import ProgressBar from "@/components/common/progress-bar"
import { ArrowLeft } from "lucide-react"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PhoneInput } from "@/components/ui/phone-input";
import { Button } from "@/components/ui/button";
import MapStep from './map-step';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAddress } from "@/lib/actions/address.actions"
import { toast } from "sonner"

const steps = [step1Schema, step2Schema];

export default function AddForm() {
  //variables
  const [step, setStep] = useState(0);
  const queryClient = useQueryClient();

  const form = useForm<FormData>({
    defaultValues: {
      city: "",
      street: "",
      phone: "",
      username: "",
      lat: "",
      long: ""
    },
    resolver: zodResolver(fullSchema),

  });

  // Mutation for adding address
  const { mutateAsync, isPending } = useMutation({
    mutationFn: addAddress,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["addresses"] });
      toast("success");
    },
    onError: (error: any) => {
      toast("failed to add address");
    },
  });


  const onSubmit = async (values: FormData) => {
    if (step < steps.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      console.log(values)
      try {
        await mutateAsync(values);
        form.reset();
      } catch (error) {
        console.error(error);
      }
    }
  };
  //translation

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/*progress bar*/}
        <ProgressBar step={step === 0 ? "1" : "2"} />

        {/*step1*/}
        {step === 0 && (<>
          {/*title*/}
          <h3 className='text-maroon-600 font-medium text-2xl border-b border-zinc-200 pb-3'>Enter address details</h3>

          {/*username*/}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => <FormItem>
              {/*label*/}
              <FormLabel className='text-zinc-800 font-medium text-sm dark:text-black'>Username</FormLabel>
              {/*input*/}
              <FormControl>
                <Input {...field} placeholder="Enter username" className='w-full' />
              </FormControl>
              {/*message*/}
              <FormMessage />
            </FormItem>}
          />

          {/*city*/}
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => <FormItem>
              {/*label*/}
              <FormLabel className='text-zinc-800 font-medium text-sm dark:text-black'>City</FormLabel>
              {/*input*/}
              <FormControl>
                <Input {...field} placeholder="Enter city name" className='w-full' />
              </FormControl>
              {/*message*/}
              <FormMessage />
            </FormItem>}
          />

          {/*address */}
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => <FormItem>
              {/*label*/}
              <FormLabel className='text-zinc-800 font-medium text-sm dark:text-black'>Address</FormLabel>
              {/*input*/}
              <FormControl>
                <Textarea {...field} placeholder="Enter your full address" className='w-full h-[100px] resize-none' />
              </FormControl>
              {/*message*/}
              <FormMessage />
            </FormItem>}
          />
          {/*phone*/}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => <FormItem>
              {/*label*/}
              <FormLabel className='text-zinc-800 font-medium text-sm dark:text-black'>Phone</FormLabel>
              {/*input*/}
              <FormControl>
                <PhoneInput {...field} key="phone-input" placeholder="Phone number" className='w-full' />
              </FormControl>
              {/*message*/}
              <FormMessage />
            </FormItem>}
          />

        </>)}

        {step === 1 && (<>
          {/* title*/}
          <div className='flex gap-4 border-b border-zinc-200 pb-3'>
            {/*icon*/}
            <div className='size-[35px] rounded-full bg-maroon-600 flex items-center justify-center cursor-pointer' onClick={() => { setStep(0) }}>
              <ArrowLeft size={20} color="#fff" />
            </div>
            <h3 className='text-maroon-600 font-medium text-2xl'>Find Your Location</h3>
          </div>

          {/* map */}
          <div className="mt-4 pb-11">
            <MapStep
              onSelect={(lat, lng) => {
                form.setValue("lat", String(lat), { shouldValidate: true });
                form.setValue("long", String(lng), { shouldValidate: true });
              }}
            />
          </div>
        </>
        )}

        {/*button*/}
        <Button type="submit"
          disabled={isPending}
          className="px-4 py-2.5 block w-full text-white font-medium rounded-[10px]">
          {isPending
            ? "Saving..."
            : step < steps.length - 1
              ? "Next"
              : "Add Address"}
        </Button>
      </form>
    </Form>
  );
}