import { z } from "zod";

//step1
export const step1Schema = z.object({
  username: z.string().min(3, "Name must be at least 3 characters").max(50, "Name must not exceed 50 characters"),
  city:z.string().min(2, "City is required").max(50, "City must not exceed 50 characters"),
  street:z.string().min(5, "Street address must be at least 5 characters").max(100, "Street address must not exceed 100 characters"),
  phone:z.string().regex(/^\+20[1-9][0-9]{9}$/,"Phone number must start with +20 and contain 11 digits"),
});

//step2
export const step2Schema = z.object({
  lat: z.string(),
  long: z.string()
});

//all schema
export const fullSchema = step1Schema.merge(step2Schema);

export type FormData = z.infer<typeof fullSchema>;
