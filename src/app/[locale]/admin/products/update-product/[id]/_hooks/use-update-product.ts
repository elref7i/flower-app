import { TUpdateProductForm, updateProductSchema } from "@/lib/schema/products-cu.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { updateProductAction } from "../_action/update-product.action";

export default function useUpdateProducts(id: string) {
  // form schema
  const schema = updateProductSchema();

  // form mutation
  const { error, mutate, isPending } = useMutation({
    mutationKey: ["addProduct"],
    mutationFn: async (values: TUpdateProductForm) => {
      const response = await updateProductAction(values, id);

      if ("error" in response) throw new Error(response.error || "Can't update product");
      return response;
    },
    onSuccess: (data) => {
      toast.success("Product updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  // form hook
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      price: "",
      discount: "",
      quantity: "",
      title: "",
      description: "",
      category: "",
      occasion: "",
    },
  });

  // submit function
  const onSubmit: SubmitHandler<TUpdateProductForm> = (values) => {
    const data: TUpdateProductForm = {};
    // add existed values to data
    for (let key in values) {
      const value = values[key as keyof TUpdateProductForm];
      if (value !== "") {
        //@ts-expect-error
        data[key as keyof TUpdateProductForm] = value;
      }
    }
    // mutate
    mutate(data);
  };

  return { form, onSubmit, error, isPending };
}
