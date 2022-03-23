import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { Row, Col, CardTitle, CardBody, Input, Card } from "reactstrap";
import { Form } from "react-bootstrap";
import SpeedIcon from "@mui/icons-material/Speed";
import { Table } from "reactstrap";

const Example = ({ ref }) => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "green",
    },

    title: {
      margin: 20,
      fontSize: 25,
      textAlign: "center",
      backgroundColor: "#E4E4E4",
      textTransform: "uppercase",
    },

    section: {
      margin: 10,
      padding: 10,
      fontSize: 25,
    },
  });
  return (
    //<>
    //   <Document>
    //     <Page size="A4" style={styles.page}>
    //       <View style={styles.title}>
    //         <Text>Welcome to Tutorialspoint...</Text>
    //       </View>
    //       <View style={styles.section}>
    //         <Text>Create PDF using React</Text>
    //       </View>
    //       <View style={styles.section}>
    //         <Text>
    //           <Table bordered hover>
    //             <thead>
    //               <tr>
    //                 <th className="text-center">Periodo</th>
    //                 <th className="text-center">Velodicad promedio Km/h</th>
    //                 <th className="text-center">
    //                   <div id="row">
    //                     <div id="images">
    //                       <div class="image">
    //                         {/* <img
    //                     className="rounded float-right"
    //                     src={cemex}
    //                     style={{
    //                       height: 110,
    //                       width: 210,
    //                     }}
    //                   /> */}
    //                       </div>
    //                     </div>
    //                     <div id="label"> Accceleraciones Agresivas</div>
    //                   </div>
    //                 </th>
    //                 <th className="text-center">Frenadas Bruscas</th>
    //                 <th className="text-center">Curvas Agresivas</th>
    //                 <th className="text-center">
    //                   Tiempo en Exceso de Velocidad hh:mm:ss
    //                 </th>
    //                 <th className="text-center">
    //                   Distancia en Exceso de Velocidad Km
    //                 </th>
    //                 <th className="text-center">Reposo hh:mm:ss</th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               <tr style={{ textAlign: "center" }}>
    //                 <td>Actual</td>
    //                 <td>1</td>
    //                 <td>2</td>
    //                 <td>3</td>
    //                 <td>4</td>
    //                 <td>5</td>
    //                 <td>6</td>
    //                 <td>7</td>
    //               </tr>
    //               <tr style={{ textAlign: "center" }}>
    //                 <td>Anterior</td>
    //                 <td>1</td>
    //                 <td>2</td>
    //                 <td>3</td>
    //                 <td>4</td>
    //                 <td>5</td>
    //                 <td>6</td>
    //                 <td>7</td>
    //               </tr>
    //               <tr style={{ justifyContent: "center" }}>
    //                 <td>Desempeño</td>
    //                 <td style={{ justifyContent: "center" }}></td>
    //                 <td></td>
    //                 <td></td>
    //                 <td></td>
    //                 <td></td>
    //                 <td></td>
    //                 <td></td>
    //               </tr>
    //             </tbody>
    //           </Table>
    //         </Text>
    //       </View>
    //     </Page>
    //   </Document>

    <>
      <div ref={ref}>
        My cool content here!
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.title}>
              <Text>Welcome to Tutorialspoint...</Text>
            </View>
            <View style={styles.section}>
              <Text>Create PDF using React</Text>
            </View>
            <View style={styles.section}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididuntut labore et dolore magna aliqua. Ut
                enimad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </Text>
            </View>
          </Page>
        </Document>
      </div>
    </>
  );
};
export default Example;
