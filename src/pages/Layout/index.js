import React, { Fragment } from "react";
import {storeItem} from "../../environment/firebase/firestore/index";
import { Button } from "evergreen-ui";

const eventButton = () => { 
    let toStore = {name: 'new NAME', description: 'new DESCRIPTION'};
    storeItem(toStore, 'test-collection');
}

const Layout = () => (
    <Fragment>
        <h1>Layout</h1>
        <Button onClick={eventButton}>Testint firebase</Button>
    </Fragment>
);

export default Layout;
