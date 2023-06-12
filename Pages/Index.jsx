import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import IconVisa from '@/Components/Icon/IconVisa';
import IconAmExp from '@/Components/Icon/IconAmExp';
import IconMasterCard from '@/Components/Icon/IconMasterCard';
import IconCheckmark from '@/Components/Icon/IconCheckmark';

export default function Index(props) {

   return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Dashboard" />

            <div className='max-w-5xl mx-auto flex flex-col items-center px-5'>
                <div className='max-w-[600px]'>
                    <div className="mb-8 text-center">
                        <span className='rounded-full bg-[#CACED0]/60 w-[80px] h-[80px] 
                        inline-flex justify-center items-center text-3xl mb-3'>
                            C
                        </span>
                        
                        <p className="text-gray-600 leading-tight mb-4">contactmantey@gmail.com</p>

                        <p className="w-full block text-lg text-gray-900">
                            Get to manage your current subscription plan and more here.
                        </p>
                    </div>

                    <div className='flex flex-col space-y-8'>
                        <div className='bg-[#E7E9EA]/50 rounded-md shadow-sm min-w-[600px]'>
                            <div className='bg-white rounded-t-md rounded-b-sm px-4 py-3 border-x border-t 
                            border-x-gray-300/40 border-t-gray-300/20'>
                                <h2 className="font-bold text-xl text-gray-800 leading-tight mb-3">Hobby</h2>
                                <span className="font-bold text-base text-gray-800 leading-tight mb-3 block">$39.99 / monthly</span>

                                <div className='text-base text-gray-600'>
                                    <p className='mb-2'>Take your application to the next level with our growth plan.</p>
                                    <ul className='space-y-1 flex flex-col'>
                                        <li className='inline-flex items-center'>
                                            <span className='bg-green-400 rounded-full w-[17px] h-[17px] flex items-center justify-center mr-2'>
                                                <IconCheckmark className='w-4 h-4 fill-current text-white'/>
                                            </span>
                                            Unlimited Servers
                                        </li>
                                        <li className='inline-flex items-center'>
                                            <span className='bg-green-400 rounded-full w-[17px] h-[17px] flex items-center justify-center mr-2'>
                                                <IconCheckmark className='w-4 h-4 fill-current text-white'/>
                                            </span>
                                            500 Deployments
                                        </li>
                                        <li className='inline-flex items-center'>
                                            <span className='bg-green-400 rounded-full w-[17px] h-[17px] flex items-center justify-center mr-2'>
                                                <IconCheckmark className='w-4 h-4 fill-current text-white'/>
                                            </span>
                                            Priority Support
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='px-4 py-3 flex flex-row justify-start border-x border-b border-t 
                            border-gray-300 border-t-gray-300/20 border-x-gray-300/40 rounded-b-md'>
                                <PrimaryButton>Change Subscription Plan</PrimaryButton>
                            </div>
                        </div>

                        <div>
                            <h1 className="font-bold text-[21px] text-gray-800 leading-tight mb-2">Payment Info</h1>
                            <div className='bg-white rounded-md shadow-sm min-w-[600px]'>
                                <div className='bg-white rounded-t-md rounded-b-sm px-4 py-5 border-x border-t
                                border-x-gray-300/40 border-t-gray-300/20 space-y-2'>
                                    <div className='text-base text-gray-600 items-center inline-flex'>
                                        Your current payment info is 
                                        <span className='font-bold text-gray-800 inline-flex ml-2 items-center'>
                                            <span className='w-10 h-[25px] border flex items-center justify-center rounded-sm mr-2'>
                                                {/* <IconMasterCard className="w-8 h-6"/> */}
                                                {/* <IconAmExp className="w-7 h-4"/> */}
                                                <IconVisa className="w-8 h-8"/>
                                            </span> •••• •••• •••• 5964
                                        </span>
                                    </div>
                                    <div className='text-base text-gray-600 items-center'>
                                        Expires <span className='font-bold text-gray-800 inline-flex'> 12/2034</span>
                                    </div>
                                </div>
                                <div className='px-4 py-3 flex flex-row justify-start border-x border-b border-t
                                border-gray-300 border-t-gray-300/20 border-x-gray-300/40 rounded-b-md'>
                                    <PrimaryButton>Update Payment Method</PrimaryButton>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1 className="font-bold text-[21px] text-gray-800 leading-tight mb-2">Receipts</h1>
                            <div className='bg-white rounded-md shadow-sm min-w-[600px] px-4 py-0 border-x border-t
                                border-x-gray-300/40 border-t-gray-300/20 divide-y flex flex-col'> 
                                {
                                    new Array(10).fill(null).map((_, index) => (
                                    <div className='flex flex-row space-x-8 items-center py-4 text-[15px]'>
                                        <div className='font-bold text-gray-800'>February {10 + index}th, 2023</div>
                                        <div className='font-bold text-gray-800'>$27</div>
                                        <a className="underline underline-offset-1 text-gray-600 cursor-pointer">View Receipt</a>
                                    </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </AuthenticatedLayout>
   )

}
  