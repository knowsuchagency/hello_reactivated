import React from "react";

import {templates} from "@reactivated";

export const Template = (props: templates.Default) => (
    <h1>Hello, {props.name}</h1>
);
