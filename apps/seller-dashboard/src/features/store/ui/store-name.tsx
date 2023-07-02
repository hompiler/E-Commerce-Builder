import Image from "next/image";
import Form from "@components/form-components/form";
import Input from "@components/form-components/input";
import Button from "@components/buttons/Button";

export default function StoreNameSelection() {
    return (
        <div className="column  ">
            <Image
                className={"mx-auto mt-[-28px] mb-[32px]"}
                src={"/images/store-image.svg"}
                alt={"Store Image"}
                width={186}
                height={175}
            />
            <Form onFinish={() => {}}>
                <Input
                    name={"storeName"}
                    placeholder={"Store Name"}
                    label={"Store Name"}
                />
                <Button className={"mt-6"} formType={"submit"} width={"large"}>
                    Create Store
                </Button>
            </Form>
        </div>
    );
}
