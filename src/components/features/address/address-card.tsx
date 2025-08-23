import { Card, CardContent } from "@/components/ui/card"
import DeleteAddress from './delete-address-model'
import { getAllAddresses } from '@/lib/api/address.api';
import { MapPin, Phone } from 'lucide-react'
import UpdateAddress from "./update-address-model";

export default async function AddressCard() {
    //variables
    const addresses: Address[] = await getAllAddresses();

    return <>
        {addresses.map((address) => {
            return <Card key={address._id} className='mt-4 pt-6 pb-5 rounded-md border-zinc-300 hover:border-zinc-400 transition duration-300 relative'>
                <CardContent>
                    {/*header*/}
                    <div className='flex justify-between items-center'>
                        {/*location icon*/}
                        <div className='gap-2.5 flex'>
                            <div className='bg-emerald-500 rounded-full gap-2.5 size-[33px] flex justify-center items-center'>
                                <MapPin color='white' size={20} />
                            </div>
                            {/*city*/}
                            <h3 className='capitalize text-zinc-800 text-2xl font-semibold dark:text-white'>{address.city}</h3>
                        </div>
                        <div className='flex'>
                            {/*phone icon*/}
                            <div className='rounded-full gap-2.5 size-[33px] flex justify-center items-center'>
                                <Phone size={20} />
                            </div>
                            {/*phone*/}
                            <h3 dir="ltr" className='font-medium text-zinc-600 text-lg dark:text-white'>{address.phone}</h3>
                        </div>
                    </div>
                    {/*address*/}
                    <p className='font-medium text-zinc-800 capitalize bg-zinc-100 rounded-full gap-2.5 py-1 px-3 my-2 inline-block'>{`${address.street}, ${address.city}`}</p>
                    {/*icons*/}
                    <div className='absolute top-1/2 -translate-y-1/2 -end-[18px] flex flex-col gap-1.5'>
                        {/*update model*/}
                        <UpdateAddress address={address}  />
                        {/*delete model*/}
                        <DeleteAddress id={address._id} />
                    </div>
                </CardContent>
            </Card>
        })}
    </>
}