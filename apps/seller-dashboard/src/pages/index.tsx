import Button from "@components/buttons/Button";
import { PlusIcon } from "@icons";

export default function Home() {
    return (
        <div className="column gap-4">
            <Button icon={<PlusIcon />} width={"medium"}>
                Test
            </Button>
            <Button icon={<PlusIcon />} width={"large"}>Test</Button>
            <Button icon={<PlusIcon />} width={"medium"} variant={"outline"}>
                Test
            </Button>
            <Button icon={<PlusIcon />} width={"large"} variant={"outline"}>
                Test
            </Button>
        </div>
    );
}
