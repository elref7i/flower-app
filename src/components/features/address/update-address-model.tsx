import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { PenLine } from "lucide-react";
import { getTranslations } from "next-intl/server";
import UpdateForm from "./update-address-form";

export default async function UpdateAddress({address}:{address:Address}) {
    //translation
    const t = await getTranslations("address")

    return <Dialog>
        {/*button*/}
        <DialogTrigger>
            <div className='bg-zinc-50 rounded-full gap-2 size-9 flex justify-center items-center border border-zinc-400 cursor-pointer'>
                <PenLine size={18} className="stroke-current dark:text-black" />
            </div>
        </DialogTrigger>
        <DialogContent className='bg-white p-6 gap-9  [&>button:has(span.sr-only)]:hidden overflow-y-auto min-h-[659px] max-h-[659px] max-w-[850px] '>
            <DialogHeader >
                {/*title*/}
                <DialogTitle className='text-zinc-800 font-bold text-3xl'>{t("update-address")}</DialogTitle>
                <DialogDescription className='gap-9'>
                    <UpdateForm address={address}/>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
}