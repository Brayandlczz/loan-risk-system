import { useMutation } from "@tanstack/react-query";

import { predictLoan } from "@/src/services/prediction.service";

export function usePredictLoan() {
  return useMutation({
    mutationFn: predictLoan,
  });
}