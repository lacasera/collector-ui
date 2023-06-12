import { useState } from 'react';
import { Link } from '@inertiajs/react';
import IconReceiptsV2 from '@/Components/Icon/IconReceiptsV2';
import IconOption from '@/Components/Icon/IconOption';

export default function Authenticated({ auth, header, children }) {

    return (
        <div className="flex w-full flex-col bg-site">
            <header className="bg-transparent">
                <div className="max-w-5xl mx-auto px-5">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <h2 className="font-bold text-xl text-gray-800 leading-tight">PayLink</h2>
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center ml-6 space-x-5">
                            <button type='button' className="h-6 w-6 relative">
                                <IconReceiptsV2 className="w-[22px] h-[22px] fill-current text-[#1F1D1B]"/>
                            </button>

                            <button type='button' className="h-6 w-6 relative">
                                <IconOption className="w-5 h-5 fill-current text-[#1F1D1B] rotate-90"/>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        <main className="flex-1 py-5">{children}</main>
    </div>
    );
}
