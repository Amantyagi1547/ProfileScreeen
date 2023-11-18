import { Feather, FontAwesome, FontAwesome5, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { AnimatedCircularProgress } from 'react-native-circular-progress';



const ProfileScreen = ({ profileData }) => {
  // Assuming profileData contains the fetched profile details

  return (
    <View style={{backgroundColor:"#ffffff",height:"100%"}}>
        <View style={{marginHorizontal:"2%",}}>
    
        <View style={{borderWidth:"1%",borderColor:"grey",}}/>

        {/* name and image section */}
        <View style={{flexDirection:"row",marginTop:"5%",justifyContent:"space-between"}}>
        <View>
            <Text style={{fontSize:responsiveFontSize(2.5),fontWeight:"600",color:"#012E57"}}>S.Meena, F/23</Text>
            <Text style={{color:"#012E57"}}>Patient ID: 87 20200727153457</Text>
        </View>
        <View>
            <MaterialIcons name="perm-contact-calendar" size={50} color="#002647" style={{marginTop:-6}} />
        </View>
        </View>


        {/* Goal section */}
        <View style={{borderRadius:15,borderColor:"#002647",borderWidth:1,marginTop:"5%",backgroundColor:"#002647",paddingHorizontal:"10%",paddingBottom:"8%",elevation:10}}>
            <Text style={{textAlign:"center",color:"white",fontSize:responsiveFontSize(2.4),fontWeight:"500",marginTop:"2%"}}>Goal reached</Text>
        <View style={{flexDirection:"row",justifyContent:"space-between",}}>

        <View>
        <AnimatedCircularProgress
            size={100}
            width={20}
            fill={40}
            rotation={0}
            tintColor="#fcb000"
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="white" style={{marginTop:"30%"}}/>

            <Text style={{color:"white",fontSize:responsiveFontSize(3.5),fontWeight:"600",marginTop:"6%",left:"20%"}}>40%</Text>
        </View>
        <View>  
            <View style={{paddingVertical:"10%",borderRadius:10,marginTop:"40%",paddingHorizontal:"10%",backgroundColor:"white",}}>
                <Text style={{fontWeight:"600"}}>EMG</Text>
            </View>
            <View style={{paddingVertical:"10%",borderRadius:10,marginTop:"10%",paddingHorizontal:"10%",backgroundColor:"white",}}>
                <Text style={{fontWeight:"600"}}>ROM</Text>
            </View>
        </View>
        </View>
        </View>


        {/* details section */}
        <View style={{marginTop:"5%",flexDirection:"row",paddingHorizontal:"2%"}}>
        <View style={{paddingVertical:"2%",width:"35%"}}>
            <Text style={{color:"grey",fontWeight:"500",paddingVertical:"5%"}}>Phone no.</Text>
            <Text style={{color:"grey",fontWeight:"500",paddingVertical:"5%"}}>Mail ID</Text>
            <Text style={{color:"grey",fontWeight:"500",paddingVertical:"5%"}}>Affected Side</Text>
            <Text style={{color:"grey",fontWeight:"500",paddingVertical:"5%"}}>Condition</Text>
            <Text style={{color:"grey",fontWeight:"500",paddingVertical:"5%"}}>Speciality</Text>
        </View>
        <View style={{paddingVertical:"2%",width:"65%"}}>
            <Text style={{color:"black",fontWeight:"500",paddingVertical:"2.6%"}}><Ionicons name="call-sharp" size={15} color="black" /> 8022334455</Text>
            <Text style={{color:"black",fontWeight:"500",paddingVertical:"2.6%"}}><Feather name="mail" size={15} color="black" /> meenarabinsachin2@gmail.com</Text>
            <Text style={{color:"black",fontWeight:"500",paddingVertical:"2.6%"}}><Fontisto name="blood-drop" size={15} color="red" /> Billateral</Text>
            <Text style={{color:"black",fontWeight:"500",paddingVertical:"2.6%"}}><MaterialCommunityIcons name="bone" size={15} color="black" /> Ortho</Text>
            <Text style={{color:"black",fontWeight:"500",paddingVertical:"2.6%"}}><MaterialCommunityIcons name="medical-bag" size={15} color="black" /> Osteoarthritis</Text>
        </View>
        </View>
        
        {/* divider and medical history section */}
        <View style={{borderWidth:"1%",borderColor:"grey",marginTop:"3%",}}/>
        <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:"5%"}}>
            <FontAwesome5 name="file-medical-alt" size={22} color="#002647"/>
            <Text style={{color:"#012E57", fontWeight:"500",marginTop:"1%",left:-5}}>Medical history</Text>
            <Text style={{marginTop:"1%",}}>Hypertension, DM, Hypothyrodism</Text>
        </View>
        <View style={{borderWidth:"1%",borderColor:"grey"}}/>

</View>
    </View>
  );
};


export default ProfileScreen;
