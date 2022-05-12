import { Button } from "./style";

import {Loading} from "../Loading";

export function ButtonSave({loadingAuth, type}){
    return(
        <Button>
            {loadingAuth ? <Loading size={200} /> : type}
        </Button>
    )

            
}
