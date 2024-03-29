import React, { useState } from "react";
import HomeStyle from "./Home.style";
import TodoString from "./String.json";
import { Label, Pivot, PivotItem, Stack } from "@fluentui/react";
import { PivotKeyEnum } from "./Types";
import TaskList from "./TaskList";
import TodoProvider from "./TodoProvider";
import TaskForm from "./TaskForm";


const Home = () => {
  const [selectedKey, setSelectedKey] = useState<string>(PivotKeyEnum.Tasks);

  return (
    <Stack className={`${HomeStyle.todoContainer}`}>
      <TodoProvider>

        <header>
          <h3 className={`${HomeStyle.logo} m-3`}>
            {TodoString.logo}<span className={HomeStyle.logoHalf}>{TodoString.logoHalf}</span>
          </h3>
        </header>


        <Stack className="container d-flex flex-column align-items-center">
          <Stack className={`row ${HomeStyle.mainCenter} justify-content-center`}>
            <div className={`${HomeStyle.rightPart} col-md-6 d-flex justify-content-center align-items-center`}>
              <h4 className={`${HomeStyle.text1}`}>
                <b>{TodoString.header}</b>
              </h4>
              <p className={`${HomeStyle.text2}`}>{TodoString.comment}</p>
            </div>
            <div className={`${HomeStyle.leftPart} col-md-6 d-flex justify-content-center align-items-center`}>
              <span className={`${HomeStyle.count} rounded-circle`}>
                <b>1/3</b>
              </span>
            </div>
          </Stack>


          <TaskForm />
          

          <Stack className={`${HomeStyle.pivotContainer}`}>
            <Pivot selectedKey={String(selectedKey)} onLinkClick={(item?: PivotItem) => {
              setSelectedKey(item?.props.itemKey || PivotKeyEnum.Tasks);
            }}>

              <PivotItem headerText={TodoString.pivots.taskTab} itemKey={PivotKeyEnum.Tasks} >
                <TaskList />
              </PivotItem>

              <PivotItem headerText={TodoString.pivots.completed} itemKey={PivotKeyEnum.Completed} className={`${HomeStyle.linkIsSelected}`}>
                <Label>Pivot #2</Label>
              </PivotItem>


            </Pivot>
          </Stack>


        </Stack>
      </TodoProvider>
    </Stack>
  );
};

export default Home;
