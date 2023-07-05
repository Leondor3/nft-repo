import { useNavigate } from 'react-router-dom';
import { Button, Title } from '..';
import Cyberpunk from '/images/blockchain.jpg'

export function Login() {

    const navigate = useNavigate()

    function SignIn() {
        navigate('/')
    }
    return (
        <section className='overflow-y-hidden h-screen w-full'>
            <div className='flex items-start gap-8'>
                <div className='w-1/2'>
                    <img className='w-full object-cover' src={Cyberpunk} alt="" />
                </div>
                <div className='flex flex-col w-1/2 pt-16 space-y-8 px-16' >
                    <div className='text-left'>
                        <Title size='xl' color='white' theme='h1'>Welcome to
                            <span className="bg-text-gradient bg-clip-text font-bold text-transparent"> NFTL25
                            </span>
                        </Title>
                        <Title size='base' color='gray' theme='base'>Register your account</Title>
                    </div>
                    <form className="space-y-4 flex flex-col ">
                        <fieldset className="flex flex-col gap-2">
                            <label className="text-gray-50" htmlFor="name">Name</label>
                            <input type="text" placeholder="Enter you name" className="bg-[#0f0f0f] border border-zinc-800 py-4 px-2 rounded-md outline-none" />
                        </fieldset>
                        <fieldset className="flex flex-col gap-2">
                            <label className="text-gray-50" htmlFor="name">Password</label>
                            <input type="password" placeholder="Enter you password" className="bg-[#0f0f0f] border border-zinc-800 py-4 px-2 rounded-md" />
                        </fieldset>
                        <Button color='violet' size='md' onClick={SignIn}>
                            <a href="/">Sign In</a>
                        </Button>
                        <span className="text-gray-200">Don't have an account?
                            <a className="text-purple-500" href=""> Register</a>
                        </span>
                    </form>
                </div>
            </div>

        </section>
    );
}