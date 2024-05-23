import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    position:"relative",
    overflow:"hidden",
    boxSizing: "borderBox",
    display: "block",
    // width: 900,
    // height: 1400,
    background: "#FFFFFF",
    boxShadow: '0px 3px 6px #0000000F',
    border: '1px solid black',
    borderRadius: 6,
    paddingTop: 28,
    paddingLeft:32
    // width:900,
    // height: 1273 
  },
  // section: {
  //   margin: 10,
  //   padding: 10,
  //   flexGrow: 1,
  // },
  // .....................................................header
  topm:{
    marginTop: 16,
    marginLeft: 0,
    marginRight:0,
    marginBottom: 0,
    display: "block"
  },
  topb:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 232
  },

  topbb: {
    fontSize: 14,
    color: '#18181B',
    marginTop: 10
  },
  // .................................... hz
  hz:{
    height:1,
    width: 530,
    backgroundColor: "black",
    display: "block",
    marginTop: 27,
    marginBottom: 27,
    opacity: 0.3

  },
  hz1:{
    height:1,
    width: 530,
    backgroundColor: "black",
    display: "block",
    marginTop: 22,
    marginBottom: 32,
    opacity: 0.3
  },
  hz2:{
    height:1,
    width: 530,
    backgroundColor: "black",
    display: "block",
    marginTop: 22.5,
    marginBottom: 22.5,
    opacity: 0.3
  },
  hz3:{
    height:1,
    width: 530,
    backgroundColor: "black",
    display: "block",
    marginTop: 24,
    marginBottom: 24,
    opacity: 0.3
  },
  hz4:{
    height:1,
    width: 530,
    backgroundColor: "black",
    display: "block",
    marginTop: 25,
    marginBottom: 62,
    opacity: 0.3
  },
  hz5:{
    height:1,
    width: 200,
    backgroundColor: "black",
    display: "block",
    marginTop: 0,
    marginBottom: 30,
    opacity: 0.3
  },
  // ............................paul Dekeyser
  flexes:{
    display: "flex",
    flexDirection: 'row',
    gap: 170
    
  },
  flexestwo:{
    display: "flex",
    flexDirection: 'row',
    gap: 214 
  },
  flexesthree:{
    display: "flex",
    flexDirection: 'row',
    gap: 258 
  },
  flexesfour:{
    display: "flex",
    flexDirection: 'row',
    gap: 158 
  },
  flexesfive:{
    display: "flex",
    flexDirection: 'row',
    gap: 147 
  },
  bodyTopH:{
    fontSize:24,
    marginBottom:29,
    color: '#0E172A',
  },
  bodyTopB:{
    fontSize:14,
    marginBottom:10,
    color: '#18181B',
  },
  bodyTopBE:{
    fontSize:14,
    marginBottom:32,
    color: '#18181B',
  },
  // ..........................
  bodyBody:{
    display: "flex",
    flexDirection: 'row'
  },
  bodyBodyH1:{
    fontSize:16,
    color: '#18181B',
    fontWeight: 600,
    marginRight: 145
  },
  bodyBodyH2:{
    fontSize:16,
    color: '#18181B',
    fontWeight: 600,
    marginRight: 45
  },
  bodyBodyH3:{
    fontSize:16,
    color: '#18181B',
    fontWeight: 600,
    marginRight: 45
  },
  bodyBodyH4:{
    fontSize:16,
    color: '#18181B',
    fontWeight: 600,
    marginRight: 35
  },
  bodyBodyH5:{
    fontSize:16,
    color: '#18181B',
    fontWeight: 600,
    marginRight: 0
  },
  // .....................................
  flexM:{
    display: "flex",
    flexDirection: "row",
  },
  flexMa:{
    fontSize:12,
    color: '#18181B',
    marginRight: 40
  },
  flexMb:{
    fontSize:12,
    color: '#18181B',
    marginRight: 36
  },
  flexMc:{
    fontSize:12,
    color: '#18181B',
    marginRight: 45
  },
  flexMd:{
    fontSize:12,
    color: '#18181B',
    marginRight: 76
  },
  flexMe:{
    fontSize:12,
    color: '#18181B',
    marginRight:0
  },
  flexMf:{
    fontSize:12,
    color: '#18181B',
    marginRight:0
  },
  bottom:{
    position: 'absolute',
    left: 417,
    bottom: 35
    },
    bottom1:{
      display: "flex",
      flexDirection: "row",
      marginBottom: 16
    },
    bottomB1:{
      fontSize: 14,
      color: '#18181B',
      marginRight: 23
    },
    bottomB3:{
      marginRight: 55,
      fontSize: 14,
    },
    bottomB2:{
      fontSize: 14,
      color: '#18181B'
    },
    bottomEnd:{
      display: "flex",
      flexDirection: "row"
    },
    bottomE:{
      fontSize: 16,
      color: '#18181B',
      fontWeight: 600,
      marginRight: 75,
    },
    bottomE1:{
      fontSize: 16,
      color: '#18181B',
      fontWeight: 600,
    },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page} width>
    <Text style={styles.top}>Factuur</Text>
    {/*  */}
    <View style={styles.topm}>
        <View style={styles.topb}>
          <Text style={styles.topbb}>Factuurdatum</Text>
          <Text style={styles.topbb}>01-04-2024</Text>
        </View>
        <View style={styles.topb}>
          <Text style={styles.topbb}>Vervaldatum</Text>
          <Text style={styles.topbb}>01-05-2024</Text>
        </View>
        <View style={styles.topb}>
          <Text style={styles.topbb}>Factuurnummer</Text>
          <Text style={styles.topbb}># 2024-19</Text>
        </View>
    </View>
    {/*  */}
    <Text style={styles.hz}></Text>
    {/*  */}

      <View style={styles.bodyTop}>
        <View style={styles.flexes}>
          <Text style={styles.bodyTopH}>Paul Dekeyser</Text>
          <Text style={styles.bodyTopH}>Airco.be</Text>
        </View>
        <View style={styles.flexestwo}>
          <Text style={styles.bodyTopB}>Belgradostraat 17</Text>
          <Text style={styles.bodyTopB}>Daknamstraat 1</Text>
        </View>
        <View style={styles.flexesthree}>
          <Text style={styles.bodyTopB}>9000 Gent</Text>
          <Text style={styles.bodyTopB}>9000 Gent</Text>
        </View>
        <View style={styles.flexesfour}>
          <Text style={styles.bodyTopBE}>paul.dekeyser@icloud.com</Text>
          <Text style={styles.bodyTopBE}>info@airco.be</Text>
        </View>
        <View style={styles.flexesfive}>
          <Text style={styles.bodyTopB}>IBAN: BE86 0019 5545 0450</Text>
          <Text style={styles.bodyTopB}>BE0804492683</Text>
        </View>
          <Text style={styles.bodyTopB}>BE0804092683</Text>
      </View>
      {/* .......................................... */}
      <Text style={styles.hz1}></Text>
      {/* ..................................... */}
      <View style={styles.bodyBody}>
          <Text style={styles.bodyBodyH1}>Beschrijving</Text>
          <Text style={styles.bodyBodyH2}>Prijs</Text>
          <Text style={styles.bodyBodyH3}>Btw</Text>
          <Text style={styles.bodyBodyH4}>Btw-tarief</Text>
          <Text style={styles.bodyBodyH5}>Totaal</Text>
      </View>
      {/* ................................. */}
      <Text style={styles.hz2}></Text>
      {/* ........................... */}
      <View>
        <View style={styles.flexM}>
          <Text style={styles.flexMa}>Okt ’23: Plugin and thema check-up</Text>
          <Text style={styles.flexMb}>€ 32,50</Text>
          <Text style={styles.flexMc}>€ 6,80</Text>
          <Text style={styles.flexMd}>21%</Text>
          <Text style={styles.flexMe}>€ 39,32</Text>
        </View>       
          <Text style={styles.flexMf}> en updates</Text>        
      </View>
      {/* ................. */}
      <Text style={styles.hz3}></Text>
      {/* ........................... */}
      <View>
        <View style={styles.flexM}>
          <Text style={styles.flexMa}>Redirect instellen. Wordpress memory</Text>
          <Text style={styles.flexMb}>€ 32,50</Text>
          <Text style={styles.flexMc}>€ 6,80</Text>
          <Text style={styles.flexMd}>21%</Text>
          <Text style={styles.flexMe}>€ 39,32</Text>
        </View>       
          <Text style={styles.flexMf}>limit uitbreiden. Contact opnemen met Niels.</Text>        
      </View>
      <Text style={styles.hz3}></Text>
      <View style={styles.bottom}>
          <View style={styles.bottom1}>
            <Text style={styles.bottomB1}>Totaal excl. btw</Text>
            <Text style={styles.bottomB2}>€ 65</Text>
          </View>
          <View style={styles.bottom1}>
            <Text style={styles.bottomB3}>Totaal btw</Text>
            <Text style={styles.bottomB2}>€ 13,60</Text>
          </View>
          <Text style={styles.hz5}></Text>
          <View style={styles.bottomEnd}>
            <Text style={styles.bottomE}>Totaal</Text>
            <Text style={styles.bottomE1}>€ 78,65</Text>
          </View>
        </View>
    </Page>
  </Document>
);

export default MyDocument