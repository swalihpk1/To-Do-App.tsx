import { mergeStyleSets } from "@fluentui/react";



const HomeStyle = mergeStyleSets({
    todoContainer: {
        width: "100%",
        height: "100%",
        position: "absolute",
        background: "#111111"
    },
    logo: {
        color: "rgb(195, 177, 147)",
    },
    logoHalf: {
        color: "rgb(238, 62, 32)"
    },
    mainCenter: {
        background: "#0000",
        width: "44%",
        height: "12rem",
        border: "1px solid rgb(195, 177, 147)",
        borderRadius: "2rem",
        alignItems: "center"
    },
    leftPart: {
        alignItems: "center"
    },
    rightPart: {
        alignItems: "center",
        color: "#c3b193",
        flexDirection: "column"
    },
    count: {
        fontSize: "xxx-large",
        background: "#ee3e20",
        padding: "2rem",
        letterSpacing: "2px"
    },
    text1: {
        fontSize: "xx-large"
    },
    text2: {
        letterSpacing: "4px"
    },
    main2: {
        width: "45%",
        alignItems: "center",
        flexDirection: "row"
    },
    inputTask: {
        borderRadius: "2rem",
        border: "none",
        background: "rgb(32 32 32)",
        padding: "1rem",
        width: "100%",
        transition: "box-shadow 0.3s ease",
        zIndex: "1",
        outline: "none",
        boxShadow: "none",
        color: "#ffffff",

    },
    addBtn: {
        background: "#ee3e20",
        borderRadius: "2rem",
        border: "none",
        fontSize: "xx-large",
        zIndex: "2",
        cursor: "help",
    },
    inputFocused: {
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)", // White shadow
    },
    btnIcon: {
        padding: "9px"
    },
    tasks: {
        background: "rgb(26 26 26)",
        border: "1px solid rgb(195, 177, 147)",
        borderRadius: "10px",
        padding: "9px",
        marginBottom: "1rem"
    },
    main3: {
        width: "100%"
    },
    taskName: {
        color: "rgb(195, 177, 147)",
        margin: 0,
        paddingLeft: "2rem"
    },
    actionBtn: {
        background: "none",
        border: 0,
        fontSize: "larger"
    },
    icons: {
        color: "rgb(195, 177, 147)!important"
    },
    checkbox: {
        '& input[type="checkbox"]': {
            background: 'white !important',
            width: '30rem !important',
        },
    },
    pivotContainer: {
        margin: "2rem",
        width: "34rem"
    },
    messageBar: {
        width: "28%!important",
        margin: "1rem !important",
        borderRadius: "3px",
        color: "#00b33a"
    },
    messageIcon: {
        position: "absolute",
        marginLeft: "10px",
        color: "#00b33a"
    }
    
});

export default HomeStyle;


