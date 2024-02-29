import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Input, Textarea, Button } from "@nextui-org/react"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import CommentCard from "@/app/ui/contact/coments";
export default function Contact() {
    return (
        <div className="px-2 py-3">
            <Divider className="my-3"/>
            <section className="flex flex-col gap-4 items-center">

                <h1 className="text-2xl font-bold">Contact</h1>
                <form className="w-[300px] flex flex-col gap-4">
                    <Input
                        isRequired
                        type="text"
                        label="Full Name"
                        defaultValue="Steve Griffin"
                        className="max-w-xs"
                        />
                    <Input
                        isRequired
                        type="email"
                        label="Phone"
                        defaultValue="311-555-5555"
                        className="max-w-xs"
                        />
                    <Input
                        isRequired
                        type="email"
                        label="Email"
                        defaultValue="kUxuL@example.com"
                        className="max-w-xs"
                        />
                        <Textarea
                        isRequired
                        label="Comment"
                        labelPlacement="outside"
                        placeholder="Enter your comment"
                        className="max-w-xs"
                        />
                        <Button color="primary" variant="ghost" className="font-semibold text-[20px]">
                            <FontAwesomeIcon icon={faPaperPlane} /> Send
                        </Button> 
                    
                </form>
            </section>
            <Divider className="my-3"/>
            <section className="w-auto"> 
                <h1 className="text-2xl font-bold text-center">Coments</h1>
                <div className="flex flex-col gap-4 items-center py-3 sm:flex-row sm:flex-wrap sm:justify-center ">
                    <CommentCard name="Steve Griffin" comment="I love the new features in this app. I can't wait to see what else I can do with it." img="https://i.pravatar.cc/300"/>
                    <CommentCard name="Steve Smith" comment="I love the new features in this app. I can't wait to see what else I can do with it." img="https://i.pravatar.cc/300"/>
                    <CommentCard name="Darieth Jasso" comment="I love the new features in this app. I can't wait to see what else I can do with it." img="https://i.pravatar.cc/300"/>
                    <CommentCard name="Darieth Jasso" comment="I love the new features in this app. I can't wait to see what else I can do with it." img="https://i.pravatar.cc/300"/>
                    <CommentCard name="Darieth Jasso" comment="I love the new features in this app. I can't wait to see what else I can do with it." img="https://i.pravatar.cc/300"/>
                </div>
            </section>
        </div>
    );
}