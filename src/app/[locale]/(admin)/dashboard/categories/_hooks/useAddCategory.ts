import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { addCategory } from "../_actions/add-category.action";

export default function useAddCategory() {
  // mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (formData: FormData) => await addCategory(formData),

    onSuccess: () => {
      toast.success("Category Added Successfully");
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return {
    addCategory: mutate,
    isPending,
    error,
  };
}
