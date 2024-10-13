import { useEffect, useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";

import Modal from '../../ui/Modal';
import Label from "../../ui/Label";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import CreateContactForm from "./CreateContactForm";

const gridSizes =  {
  gridCols1: '1fr',
  gridCols2: '10rem 1fr',
}

function EditContactView( {contactToUpdate = {}, onCloseModal }) {

  const deviceScreen = useScreenSize();
  const [ screenSize, setScreenSize ] = useState("");
  const [ numberColumns, setnumberColumns ] = useState('');
  const [ showMoreDetails, setShowMoreDetails ] = useState(false);
  const { ...contactDetails } = contactToUpdate;

  useEffect(function(){
    setScreenSize(deviceScreen);

      if(screenSize.width < 400) setnumberColumns(gridSizes.gridCols1);
     
      if(screenSize.width >= 400 ) setnumberColumns(gridSizes.gridCols2);

  },[deviceScreen, screenSize, ])

  function handleShowMoreDetails(){
    setShowMoreDetails((showMore) => !showMore);
  }

  const customStyle = ['grid', 'none'];

  return (
    <div>
        <FormRow label="Contact Photo" customStyle={customStyle.at(0)} gridCols={numberColumns}>
          <img src={contactDetails.image} alt={contactDetails.image} className="max-w-36 h-auto rounded-[50%]"/>
        </FormRow>

        <FormRow label="Title"  customStyle={showMoreDetails ? customStyle.at(0) : customStyle.at(1)} gridCols={numberColumns}>
          <Label
            type="text" 
            id="title">{contactDetails.title}</Label>
        </FormRow>

        <FormRow label="First Name" customStyle={customStyle.at(0)} gridCols={numberColumns}>
          <Label 
            type="text" 
            id="firstName"
          >{contactDetails.firstName}</Label>
        </FormRow>

        <FormRow label="Middle Name" customStyle ={showMoreDetails ? customStyle.at(0) : customStyle.at(1)} gridCols={numberColumns}>
          <Label 
            type="text" 
            id="middleName">{contactDetails.middleName}</Label>
        </FormRow>

        <FormRow label="Last Name" customStyle={customStyle.at(0)} gridCols={numberColumns}>
          <Label 
            type="text" 
            id="lastName">{contactDetails.lastName}</Label>
        </FormRow>

        <FormRow label="Suffix" customStyle={showMoreDetails ? customStyle.at(0) : customStyle.at(1)} gridCols={numberColumns}>
          <Label 
            type="text">{contactDetails.suffix}</Label>
        </FormRow>

        <FormRow label="Email" customStyle={customStyle.at(0)} gridCols={numberColumns}>
          <Label 
            type="email" 
            id="email">{contactDetails.email}</Label>
        </FormRow>

        <FormRow label="Phone" customStyle={customStyle.at(0)} gridCols={numberColumns}>
          <Label 
            type="tel" 
            id="phone"
            value={contactDetails.phone}>{contactDetails.phone}</Label>
        </FormRow>

        <FormRow label="Birthday" customStyle={showMoreDetails ? customStyle.at(0) : customStyle.at(1)} gridCols={numberColumns}>
          <Label 
            type="date" 
            id="dob">{contactDetails.dob}</Label>
        </FormRow>

        <FormRow label="Website Address" customStyle={showMoreDetails ? customStyle.at(0) : customStyle.at(1)} gridCols={numberColumns}>
          <Label 
            type="text" 
            id="website">{contactDetails.website}</Label>
        </FormRow>

        <FormRow label="Facebook" customStyle={showMoreDetails ? customStyle.at(0) : customStyle.at(1)} gridCols={numberColumns}>
          <Label 
            type="text">{contactDetails.facebook}</Label>
        </FormRow>

        <FormRow label="Instagram Handle" customStyle={showMoreDetails ? customStyle.at(0) : customStyle.at(1)} gridCols={numberColumns}>
          <Label 
            type="text" 
            id="instagram">{contactDetails.instagram}</Label>
        </FormRow>

        <FormRow label="X Handle" customStyle={showMoreDetails ? customStyle.at(0) : customStyle.at(1)} gridCols={numberColumns}>
          <Label 
            type="text" 
            id="x">{contactDetails.x}</Label>
        </FormRow>

        <FormRow label="Tiktok Handle" customStyle={showMoreDetails ? customStyle.at(0) : customStyle.at(1)} gridCols={numberColumns}>
          <Label 
            type="text">{contactDetails.tiktok}</Label>
        </FormRow>

        <FormRow label="LinkedIn Handle" customStyle={showMoreDetails ? customStyle.at(0) : customStyle.at(1)} gridCols={numberColumns}>
          <Label 
            type="text" 
            id="linkedIn">{contactDetails.linkedin}</Label>
        </FormRow>

        <FormRow label="Pinterest Handle" customStyle={showMoreDetails ? customStyle.at(0) : customStyle.at(1)} gridCols={numberColumns}>
          <Label 
            type="text" 
            id="pinterest">{contactDetails.pinterest}</Label>
        </FormRow>

        <FormRow label="Youtube Handle" customStyle={showMoreDetails ? customStyle.at(0) : customStyle.at(1)} gridCols={numberColumns}>
          <Label 
            type="text" 
            id="youtube">{contactDetails.youtube}</Label>
        </FormRow>

        <FormRow label="Snapchat Handle" customStyle={showMoreDetails ? customStyle.at(0) : customStyle.at(1)} gridCols={numberColumns}>
          <Label 
            type="text" 
            id="snapchat">{contactDetails.snapchat}</Label>
        </FormRow>

        <FormRow>
          <div className="flex flex-row items-center gap-4 cursor-pointer" onClick={handleShowMoreDetails}>
            <span>{showMoreDetails ? 'Show Less' : 'Show More'}</span>
            {showMoreDetails ? 
            <MdOutlineExpandLess className="h-8 w-8" /> : <MdOutlineExpandMore className="h-8 w-8"/>}
          </div>
        </FormRow>

        <FormRow style={{width: 'auto'}}>
          <Button 
            $variation="secondary" 
            type="reset" onClick={()=>onCloseModal?.()}>
            Cancel
          </Button>
          
          <Modal>
            <Modal.Open opens="contact-form">
              <Button option='edit'>Edit Contact</Button>
            </Modal.Open>
            
            <Modal.Window name="contact-form">
              <CreateContactForm contactToUpdate={contactDetails}/>
            </Modal.Window>
          </Modal>

        </FormRow> 
    </div>
  );
}

export default EditContactView;
