import { ReactNode } from "react";

export default function ( { children} : {
    children : ReactNode
}){
    return <div>
        {children}
        <div> Footer </div>
    </div>
}