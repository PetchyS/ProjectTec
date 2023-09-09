import { Carousel, Card } from 'antd';
import Example from './Components/Navbar1';
import FooterTab from './Components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'

export default function userMag() {
    return (
        <>
            <header className="shadow" style={{ backgroundColor: '#600c0c' }}>
                <Example className=" top-10" />
            </header>
            <main>
                <div style={{ backgroundColor: '#600c0c' }}>
                    <div className='pt-10 px-5 lg:max-w-7xl mx-auto h-full align-middle justify-center'>
                        <Carousel
                            autoplay
                            dotPosition={'top'}
                            className='shadow-xl'
                            
                        >
                            <Image className='rounded-2xl' alt='image1' src="/krutingfood5.png" width={1000} height={600} priority={true}/>
                            <Image className='rounded-2xl' alt='image2' src="/krutingfood4.png" width={1000} height={600} priority={true}/>
                            <Image className='rounded-2xl' alt='image3' src="/krutingfood2.png" width={1000} height={600} priority={true}/>

                        </Carousel>
                    </div>
                    <div className='my-8 mx-10 max-w-xl lg:mx-auto bg-red-900 p-2 px-8 rounded-full'>
                        <hr className="h-px lg:mx-auto max-w-2xl border-slate-300 border-2 dark:bg-gray-700"></hr>
                    </div>
                    <div className=' rounded-ss-full items-center border-0 mx-auto pb-7 lg:pb-16 w-full mt-10  py-6 pt-10 sm:px-6 lg:px-8 h-full' style={{ backgroundColor: '#c01c1c' }}></div>

                </div>
                <Card className=' justify-center py-14 md:flex hidden'>
                    <p className=' text-2xl text-center'>เลือกดูแพ็คเกจสุดคุ้มที่โดนใจ</p>
                    <p className=' text-3xl'>ครูติ้งจัดให้อร่อยคุ้มทุกเมนู</p>
                </Card>
                <div className='grid grid-cols-2 justify-items-center bg-white align-middle py-10'>
                    <a href='table# ' className=' border-e-2 text-center w-full border-neutral-300'>
                        <p className='text-red-900 text-2xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-150 animate-pulse'>โต๊ะจีน</p>
                    </a>
                    <a href='./Buffet#' className='text-red-900 text-2xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-150 animate-pulse'>บุฟเฟต์</a>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-10 max-w-5xl mx-auto mb-24">
                    <Image src="/30.jpg" alt='f' width={500} height={500}/>
                    <Image src="/28.jpg" alt='f' width={500} height={500}/>
                    <Image src="/14.jpg" alt='f' width={500} height={500}/>
                    <div className='col-span-3 gap-4 grid grid-cols-3'>
                        <div className='grid'>
                    <Image src="/5.jpg" alt='f' width={500} height={500}/>
                    <Image src="/4.jpg" alt='f' width={500} height={500}/>
                        </div>
                    <Image className="col-span-2" src="/13.jpg" alt='f' width={1000} height={1000} priority={true}/>
                    </div>
                </div>
                <div className='grid grid-cols-2'>
                    <div className=' scale-75 md:scale-75 xl:mt-0 mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 rounded-2xl shadow-lg shadow-black bg-red-900 '>
                        <div className='text-white text-2xl p-5 mt-5 justify-self-center'>
                            <p>ครูติ้งโต๊ะจีน</p>
                            <p className='text-sm'>รับจัดโต๊ะจีนและบุฟเฟต์ในจังหวัดเลย</p>
                            <Image className='w-auto lg:w-60 mt-8 rounded-xl' src="/krutingline.png" alt='f' width={500} height={500} />
                        </div>
                    </div>
                    <div className='flex justify-center h-full align-middle'>
                        <div className=' grid-rows-3 self-center '>
                            <p className=' text-3xl '>อร่อย สะอาด ถูกปากแน่นอน</p>
                            <p className=' w-full text-2xl text-center md:scale-100 scale-75'>จะบุฟเฟต์หรือโต๊ะจีนก็คุ้ม ลองเลือกคำนวณรายการได้เลย</p>
                        </div>
                    </div>
                </div>
                <FooterTab />
            </main>
        </>

    )
}
