import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked out`);
      // active : true will invalidate all queries in page in case we can't remember the query name
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error("There was an error while checkin in"),
  });

  return { checkout, isCheckingOut };
}
