import Frame from "../../component/styled/concrete/Frame";
import RoutineReadList from "../../component/domain/routine/RoutineReadList";
import Header from "../../component/styled/concrete/Header";
import Layout from "../../component/styled/concrete/Layout";
import Paragraph from "../../component/styled/atom/Paragraph";
import Box from "../../component/styled/atom/Box";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

const RoutineListPage = () => {
    const {pathname} = useLocation();
    useEffect(() => {
        console.log(pathname);
    })
  return (
      <>
          <Header pathname={pathname} path={"/routine/add"}/>
          <Layout>
              <Frame>
                  <Box direction={"row"} main={"center"} margin={"20px 0"}>
                      <Paragraph color={"#6B7280"}>
                          루틴 목록
                      </Paragraph>
                  </Box>
                  <RoutineReadList />
              </Frame>
          </Layout>
      </>
  )
}
export default RoutineListPage;