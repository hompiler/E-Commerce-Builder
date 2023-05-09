import Input from "@components/form-components/input";
import Form from "@components/form-components/form";

export default function Home() {
    return (
        <div>
            <Form onFinish={(values) => console.log(values)}>
                <Input name={"name"} label={"Name"} />
            </Form>
        </div>
    );
}
