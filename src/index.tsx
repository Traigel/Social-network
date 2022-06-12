import React from 'react';
import './index.css';
import {rerenderEntireTree} from "./rerender";
import {state} from "./Redux/myState";

rerenderEntireTree(state)