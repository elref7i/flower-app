import { useMutation } from "@tanstack/react-query";
import { updateCategoryAction } from "../_actions/upadate-category.acrion";
import { toast } from "sonner";

export default function useUpdateCategory() {
  // mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async ({ id, formData }: { id: string; formData: FormData }) =>
      await updateCategoryAction(id, formData),

    onSuccess: () => {
      toast.success("Category Added Successfully");
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
  return { updateCategory: mutate, error, isPending };
}
