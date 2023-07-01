import React from "react";
import Page from "@layout/page";
import Form from "@components/form-components/form";
import Button from "@components/buttons/Button";
import Input from "@components/form-components/input";
import Select from "@components/form-components/select";
import Table from "@components/tables/table";
import TextArea from "@components/form-components/text-area";
import { PlusIcon } from "@icons";

export default function AddProduct({}) {
    async function onAddProduct(data: object) {
        // console.log("D")
    }

    return (
        <Form onFinish={onAddProduct}>
            <Page
                className={"grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6"}
                title="Add Product"
                prevTitle="Products List"
                actions={
                    <>
                        <Button variant={"outline"}>Save as Draft</Button>
                        <Button formType={"submit"}>Publish</Button>
                    </>
                }
            >
                <section className="column gap-5">
                    <h2 className="h6">Main Information</h2>
                    <Input
                        icon={<PlusIcon />}
                        name="name"
                        label="Product Title"
                        placeholder="Enter Product Title"
                    />
                    <div className="h-full">
                        <TextArea
                            className="h-full"
                            name="description"
                            label="Description"
                            placeholder="Short description..."
                        />
                    </div>
                </section>
                <section className="column gap-5">
                    <h2 className="h6">Pricing</h2>
                    <div className="grid grid-cols-2 gap-5">
                        <Input
                            type="number"
                            name="price"
                            label="Price"
                            placeholder="0.00"
                        />
                        <Input
                            type="number"
                            name="compare_price"
                            label="Compare at Price"
                            placeholder="0.00"
                        />
                        <Input
                            type="number"
                            name="profit"
                            label="Profit/Margin"
                            placeholder="0.00"
                        />
                        <Input
                            type="number"
                            name="cost_per_item"
                            label="Cost Per Item"
                            placeholder="0.00"
                        />
                        <Input
                            name="vendor"
                            label="Vendor"
                            placeholder="Vendor"
                        />
                        <Input
                            type="number"
                            name="quantity"
                            label="Quantity"
                            placeholder="0"
                        />
                    </div>
                    <Select
                        options={[]}
                        name="tags"
                        label="Tags"
                        placeholder="Tags"
                        multiple
                    />
                    <Select
                        options={[]}
                        name="categories"
                        label="Categories"
                        placeholder="Categories"
                        multiple
                    />
                    <Select
                        options={[]}
                        name="collection"
                        label="Collection"
                        placeholder="Collection"
                    />
                </section>
                <section className="lg:col-span-2">
                    <h2 className="h6 mb-2">Product Variants</h2>
                    <Table dataSource={[]} columns={[]} />
                </section>
            </Page>
        </Form>
    );
}
