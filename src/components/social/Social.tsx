import { MessageCircle } from "lucide-react"

const Social = () => (
    <div className="w-full h-full flex flex-col justify-center items-center gap-3">
        <MessageCircle className="w-[2rem] h-[2rem] lg:w-[3rem] lg:h-[3rem]" strokeWidth={1} />
        <p className="text-sm lg:text-lg uppercase">Chat with me</p>
    </div>
)

export default Social