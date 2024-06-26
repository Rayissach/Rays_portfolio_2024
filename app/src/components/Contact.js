import React from 'react'

export const Contact = () => {

    return (
        <div className='bg-slate-900 h-dvh'>
            <form className='container m-auto p-8  flex-col items-center justify-center h-5/6 w-8/12 '>
                <label className='px-1 text-slate-600 block text-left' for='email'>
                    Email:{' '}
                </label>
                <input className='bg-slate-900 box-border w-80 overflow-x-scroll relative rounded-lg ring-2 dark:ring-white/10 dark:ring-inset text-slate-500 px-2' name='email'/>
 
                <div className='pb-1'></div>
                <label className='px-1 text-slate-600 block text-left' for='name'>
                    Name:{' '}
                </label>
                <input className='bg-slate-900 box-border w-80 overflow-x-scroll relative rounded-lg ring-2 dark:ring-white/10 dark:ring-inset text-slate-500 px-2' name='name'/>
                <label className='text-slate-600 block text-left px-1' for='message'>
                    Message:{' '}
                </label>
                <textarea className='align-text-top bg-slate-900 box-border h-40 w-80 overflow-scroll relative rounded-xl ring-2 dark:ring-white/10 dark:ring-inset text-slate-500 px-2' name='message'/>
            </form>
        </div>
    )
}
 