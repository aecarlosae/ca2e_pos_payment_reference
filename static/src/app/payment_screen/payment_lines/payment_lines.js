import { PaymentScreenPaymentLines } from "@point_of_sale/app/screens/payment_screen/payment_lines/payment_lines";
import { TextInputPopup } from "@point_of_sale/app/components/popups/text_input_popup/text_input_popup";
import { makeAwaitable } from "@point_of_sale/app/utils/make_awaitable_dialog";
import { patch } from "@web/core/utils/patch";
import { _t } from "@web/core/l10n/translation";

patch(PaymentScreenPaymentLines.prototype, {
    /**
     * Opens dialog popup to enter or edit the reference number using makeAwaitable.
     * @param {Object} line - Target payment line
     */
    async openReferencePopup(line) {
        const currentRef = line.get_payment_ref_no?.() || line.payment_ref_no || "";

        const payload = await makeAwaitable(this.dialog, TextInputPopup, {
            title: _t("Payment Reference"),
            startingValue: currentRef,
            placeholder: _t("Enter transaction or reference #..."),
        });

        if (payload !== false && payload !== undefined) {
            const formattedRef = payload.trim();

            if (typeof line.set_payment_ref_no === "function") {
                line.set_payment_ref_no(formattedRef);
            } else {
                line.payment_ref_no = formattedRef;
            }

            // Sync with reactive model or trigger order update
            // const currentOrder = this.pos.get_order();
            // if (currentOrder) {
            //     currentOrder.trigger("change", currentOrder);
            // }
        }
    }
});