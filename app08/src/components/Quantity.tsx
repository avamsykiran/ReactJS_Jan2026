import { Button, InputGroup} from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";

function Quantity(
    { qty, itemCode, dec, inc }:
        { qty: number, itemCode: number, dec: (id: number) => void, inc: (id: number) => void }) {

    return (
        <InputGroup>
            <Button type="button" size="sm" onClick={_e => dec(itemCode)}>
                <i className="bi bi-dash" />
            </Button>
            <InputGroupText className="w-25 text-center">{qty}</InputGroupText>
            <Button type="button" size="sm" onClick={_e => inc(itemCode)}>
                <i className="bi bi-plus" />
            </Button>
        </InputGroup>
    );
}

export default Quantity;