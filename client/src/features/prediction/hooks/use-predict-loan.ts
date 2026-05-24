import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { toast } from "sonner";

import { predictLoan } from "@/src/services/prediction.service";

export function usePredictLoan() {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: predictLoan,

    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["analytics"],
      });

      toast.success(
        "Prediction completed successfully",
        {
          description: `Approval probability: ${(
            data.approval_probability *
            100
          ).toFixed(0)}%`,
        }
      );
    },

    onError: () => {
      toast.error(
        "Prediction failed",
        {
          description:
            "Something went wrong while processing the prediction.",
        }
      );
    },
  });
}