import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Plans(props) {

   return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Plans" />

            <div className='max-w-5xl mx-auto flex flex-col items-center px-5'>
                <div className='max-w-[600px]'>
                   All Plans Goes Here
                </div> 
            </div>
        </AuthenticatedLayout>
   )
}
  