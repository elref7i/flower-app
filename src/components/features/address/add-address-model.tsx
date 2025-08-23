import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { getTranslations } from "next-intl/server";
import AddForm from "./add-address-form";

export default async function AddAddress() {
    //translation
    const t = await getTranslations("address")

    return <Dialog>
        {/*button*/}
        <DialogTrigger>{t("add-new-address")}</DialogTrigger>
        <DialogContent className='bg-white p-6 gap-9  [&>button:has(span.sr-only)]:hidden overflow-y-auto min-h-[659px] max-h-[659px] max-w-[850px] '>
            <DialogHeader >
                {/*title*/}
                <DialogTitle className='text-zinc-800 font-bold text-3xl'>{t("add-new-address")}</DialogTitle>
                <DialogDescription className='gap-9'>
                    {/*addresses cards*/}
                    <AddForm />
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
}