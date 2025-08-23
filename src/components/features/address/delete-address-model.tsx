'use client'
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { Trash, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react';
import { deleteAddress } from "@/lib/actions/address.actions";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

export default function DeleteAddress({ id }: { id: string }) {
    //variables
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleDelete = async () => {
        try {
            setLoading(true);
            await deleteAddress(id);
            setOpen(false);
            toast("Address deleted successfully")
        }
        catch (error) {
            console.error("Delete failed:", error);
        } finally {
            setLoading(false);
        }
    }

    //translation
    const t = useTranslations('address')

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {/*delete icon*/}
                <div className='bg-red-600 rounded-full gap-2 size-9 flex justify-center items-center cursor-pointer'>
                    <Trash2 size={18} color='#fff' />
                </div>
            </DialogTrigger>
            <DialogContent className="flex flex-col items-center gap-6 pt-12 w-[474px] dark:bg-zinc-900">
                {/*icon*/}
                <div className='size-[105px] bg-[#2E2E300D] dark:bg-zinc-800  rounded-full flex justify-center items-center text-center'>
                    <div className='size-[70px] bg-[#2E2E3026] dark:bg-zinc-600  rounded-full flex justify-center items-center'>
                        <Trash size={29} />
                    </div>
                </div>
                {/*message*/}
                <h3 className='font-semibold text-xl text-[#2E2E30] dark:text-white'>{t("delete")}</h3>
                {/*buttons*/}
                <div className='flex gap-2.5 pt-10'>
                    <Button variant='subtle' className='py-3.5 px-4 font-medium font-zinc-800' onClick={() => setOpen(false)}>{t('cancel')}</Button>
                    <Button className='bg-red-600 py-3.5 px-4 font-medium font-white' onClick={handleDelete}>{loading ? t('deleting') : t('confirm')}</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
