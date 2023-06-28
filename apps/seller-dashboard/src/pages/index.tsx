import Button from "@components/buttons/Button";
import { PlusIcon } from "@icons";
import Input from "@components/form-components/input";
import Form from "@components/form-components/form";
import Page from "@layout/page";

export default function Home() {
    return (
        <Page prevTitle={"Products Page"} title={"Dashboard"} className="column gap-4">
            <Form>
                <Input
                    icon={<PlusIcon />}
                    label={"Placeholder"}
                    placeholder="Placeholder"
                />
            </Form>
            <Button variant={"outline"} icon={<PlusIcon />}>
                Submit
            </Button>
            <Button width={"large"} variant={"outline"} icon={<PlusIcon />}>
                Submit
            </Button>
        </Page>
    );
}
