import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    FormControl,
    FormGroup,
    FormLabel,
    FormText
} from "react-bootstrap";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { Item } from "../lib/models/Item.ts";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addItem } from "../lib/services/itemsSlice.ts";

function ItemForm() {
    const itemSchema: yup.ObjectSchema<Item> = yup.object({
        itemCode: yup.number()
            .required("item Id is Mandatory"),
        itemName: yup.string()
            .required("item name is mandatory")
            .min(3, "Expecting item full name to be minimum 5")
            .max(10, "Expecting length of 25 character"),
        units: yup.string()
            .required("units is mandatory"),
        rate: yup.number()
            .required("rate is mandatory")
            .min(0,"rate can not be negative"),            
        stock: yup.number()
            .required("stock is mandatory")
            .min(0,"stock can not be negative"),            
    })
    
    const { register, handleSubmit, formState: { errors, isValid }, } = useForm<Item>({
        resolver: yupResolver(itemSchema),
        mode: "onTouched",
        defaultValues: {
            itemCode: 0,
            itemName: "",
            units: "",
            rate: 0,
            stock: 0
        }
    })

    const dispatch=useDispatch();
    const navigate = useNavigate();

    const save = (item: Item) => {
        dispatch(addItem(item));
        navigate("/inv");
    }

    return (
        <form className="col-sm-5 mx-auto" onSubmit={handleSubmit(save)}>
            <Card>
                <CardHeader><h3>ITEM FORM</h3></CardHeader>
                <CardBody>
                    <FormGroup className="mb-1" controlId="iid">
                        <FormLabel>Item code</FormLabel>
                        <FormControl type="number" {...register("itemCode")} />
                        {errors.itemCode && (
                            <FormText className="text-danger">
                                {errors.itemCode.message}
                            </FormText>
                        )}
                    </FormGroup>
                    <FormGroup className="mb-1" controlId="fnm">
                        <FormLabel>item Name</FormLabel>
                        <FormControl {...register("itemName")} />
                        {errors.itemName && (
                            <FormText className="text-danger">
                                {errors.itemName.message}
                            </FormText>
                        )}
                    </FormGroup>
                    <FormGroup className="mb-1" controlId="rt">
                        <FormLabel> Rate</FormLabel>
                        <FormControl type="number" {...register("rate")} />
                        {errors.rate && (
                            <FormText className="text-danger">
                                {errors.rate.message}
                            </FormText>
                        )}
                    </FormGroup>
                    <FormGroup className="mb-1" controlId="ut">
                        <FormLabel>units</FormLabel>
                        <FormControl{...register("units")} />
                        {errors.units && (<FormText className="text-danger">{errors.units.message}</FormText>)}
                    </FormGroup>
                    <FormGroup className="mb-1" controlId="st">
                        <FormLabel>stock</FormLabel>
                        <FormControl type="number" {...register("stock")} />
                        {errors.stock && (<FormText className="text-danger">{errors.stock.message}</FormText>)}
                    </FormGroup>
                </CardBody>
                <CardFooter>
                    <Button variant="primary" disabled={!isValid} type="submit">
                        <i className="bi-floppy" /> SAVE
                    </Button>
                </CardFooter>
            </Card>
        </form>
    );
}
export default ItemForm;