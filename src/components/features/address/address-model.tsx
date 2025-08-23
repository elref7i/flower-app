import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import AddressCard from './address-card'
import AddAddress from './add-address-model'
import { getTranslations } from "next-intl/server";

export default async function AddressModel() {
    //variables
    const t = await getTranslations("address")
    return <>
        <Dialog>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent className='bg-white p-6 gap-9  [&>button:has(span.sr-only)]:hidden overflow-y-auto min-h-[500px] max-h-[659px] max-w-[850px] '>
                <DialogHeader >
                    <div className='flex justify-between pb-4 border-b border-zinc-200' >
                        {/*title*/}
                        <h3 className='text-zinc-800 text-3xl font-bold'>{t("all-addresses")}</h3>
                        {/*add dialog*/}
                        <Button variant={'secondary'} className=' gap-2.5 py-3.5 px-4 font-medium'><AddAddress/></Button>
                    </div>
                    
                    <DialogDescription className='gap-9'>
                        {/*addresses cards*/}
                        <AddressCard />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    </>

}
