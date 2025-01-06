import { MessageCircle } from "lucide-react"

const Social = () => (
    <div className="w-full h-full flex flex-col justify-center items-center gap-3">
        <MessageCircle style={{ width: "3rem", height: "3rem" }} strokeWidth={1} />
        <p className="text-lg uppercase">Chat with me</p>
    </div>
)

export default Social