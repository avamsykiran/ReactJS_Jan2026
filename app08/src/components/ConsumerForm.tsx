import { Alert, Button, Card, CardBody, CardFooter, CardHeader, Form, FormControl, FormGroup, FormLabel, FormText } from "react-bootstrap";
import * as yup from "yup";
import type { Consumer } from "../lib/models/Consumer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { addConsumer, updateConsumer } from "../lib/services/consumersThunks";
import { useNavigate, useParams } from "react-router";
import { selectConsumerById, selectConsumerSliceErrMsg, selectConsumerSliceStatus } from "../lib/services/selectors";
import type { AppDispatch, RootState } from "../lib/services/appStore";

function ConsumerForm() {

    const { id } = useParams();

    const dispatch : AppDispatch = useDispatch();
    const navigate = useNavigate();

    const oldConsumer = useSelector((state:RootState) => selectConsumerById(state,Number(id)));
    const status = useSelector(selectConsumerSliceStatus);
    const errMsg = useSelector(selectConsumerSliceErrMsg);

    const isEditing = id ? true : false;

    const consumerSchema: yup.ObjectSchema<Consumer> = yup.object({
        cid: yup.number()
            .required("Consumer Id is a madetory field"),
        fullName: yup.string()
            .required("Full Name is a madetory field")
            .min(5, "Expecting Full Name to be minimum 5 chars in length")
            .max(25, "Expecting Full Name to be maximum 25 chars in length"),
        mobile: yup.string()
            .required("Mobile Number is a madetory field")
            .matches(/^[1-9][0-9]{9}$/, "Mobile Number must be exactly 10 digits"),
        mailId: yup.string()
            .required("Mail Id is a madetory field")
            .email("A valid email expected"),
    })

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<Consumer>({
        resolver: yupResolver(consumerSchema),
        mode: "onTouched",
        defaultValues: oldConsumer? {...oldConsumer} : {cid: 0,fullName: "",mobile: "",mailId: ""}
    })

    const save = (consumer: Consumer) => {
        isEditing ? dispatch(updateConsumer(consumer)) : dispatch(addConsumer(consumer));
        navigate("/cmrs");
    }

    return (
        <Form className="col-sm-5 mx-auto" onSubmit={handleSubmit(save)}>
            <Card>
                <CardHeader>
                    <h3>{isEditing?"Edit":"New"} Consumer</h3>
                </CardHeader>
                <CardBody>
                    {
                        status === "error" && (
                            <Alert variant="danger">
                                <strong>{errMsg} </strong>
                            </Alert>
                        )
                    }

                    {
                        status === "pending" && (
                            <Alert variant="info">
                                <strong>Please wait while processing your request .. </strong>
                            </Alert>
                        )
                    }

                    <FormGroup className="mb-1" controlId="cid">
                        <FormLabel>Consumer Id</FormLabel>
                        <FormControl type="number" {...register("cid")} />
                        {errors.cid && (
                            <FormText className="text-danger">
                                {errors.cid.message}
                            </FormText>
                        )}
                    </FormGroup>
                    <FormGroup className="mb-1" controlId="fnm">
                        <FormLabel>Full Name</FormLabel>
                        <FormControl {...register("fullName")} />
                        {errors.fullName && (
                            <FormText className="text-danger">
                                {errors.fullName.message}
                            </FormText>
                        )}
                    </FormGroup>
                    <FormGroup className="mb-1" controlId="mno">
                        <FormLabel>Mobile Number</FormLabel>
                        <FormControl type="number" {...register("mobile")} />
                        {errors.mobile && (
                            <FormText className="text-danger">
                                {errors.mobile.message}
                            </FormText>
                        )}
                    </FormGroup>
                    <FormGroup className="mb-1" controlId="mid">
                        <FormLabel>Mail Id</FormLabel>
                        <FormControl {...register("mailId")} />
                        {errors.mailId && (
                            <FormText className="text-danger">
                                {errors.mailId.message}
                            </FormText>
                        )}
                    </FormGroup>                    
                </CardBody>
                <CardFooter className="text-end">
                    <Button variant="primary" disabled={!isValid} type="submit">
                        <i className="bi-floppy" /> SAVE
                    </Button>
                </CardFooter>
            </Card>
        </Form>
    );
}

export default ConsumerForm;