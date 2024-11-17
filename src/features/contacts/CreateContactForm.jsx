import { useForm } from "react-hook-form";
import "react-international-phone/style.css";
import { PhoneInput } from "react-international-phone";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import FileInput from "../../ui/FileInput";

import { useUpdateContact } from "./useUpdateContact";
import { useCreateContact } from "./useCreateContact";
import { useEffect, useState } from "react";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";
import useScreenSize from "../../hooks/useScreenSize";
import styled from "styled-components";

const gridSizes = {
  gridCols1: "1fr",
  gridCols2: "10rem 1fr",
};

const PhoneStyled = styled(PhoneInput)`
  width: 20rem;
  /* display: flex;
    position: absolute;
    z-index: 999 !important; */
`;

function CreateContactForm({ contactToUpdate = {}, onCloseModal }) {
  const deviceScreen = useScreenSize();
  const [phone, setPhone] = useState("");
  const [screenSize, setScreenSize] = useState("");
  const [numberColumns, setnumberColumns] = useState("");
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const { isEditing, updateContact } = useUpdateContact();
  const { isCreating, createContact } = useCreateContact();
  const { id: editId, ...editValues } = contactToUpdate;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  useEffect(
    function () {
      setScreenSize(deviceScreen);

      if (screenSize.width < 400) setnumberColumns(gridSizes.gridCols1);

      if (screenSize.width >= 400) setnumberColumns(gridSizes.gridCols2);

      if (isEditSession) setPhone(editValues.phone);
    },
    [deviceScreen, screenSize, editValues.phone, isEditSession],
  );

  // Gets errors from the form
  const { errors } = formState;

  // set computed state if creating or editing
  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    // data.image is for new image upload; data.image[0] is for existing image path
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      updateContact(
        { newContactData: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
    else
      createContact(
        {
          ...data,
          deleted: false,
          favourite: false,
          flagged: false,
          image: image,
        },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        },
      );
  }

  function onError() {
    // console.log(errors);
  }

  function handleShowMoreDetails() {
    // console.log(e.target);
    setShowMoreDetails((showMore) => !showMore);
  }

  const customStyle = ["grid", "none"];

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow
        label="Contact Photo"
        customStyle={customStyle.at(0)}
        gridCols={numberColumns}
      >
        <FileInput id="image" accept="image/*" {...register("image")} />
      </FormRow>

      <FormRow
        label="Title"
        error={errors?.title?.message}
        customStyle={showMoreDetails ? customStyle.at(0) : customStyle.at(1)}
        gridCols={numberColumns}
      >
        <Input
          type="text"
          id="title"
          defaultValue=""
          disabled={isWorking}
          {...register("title")}
        />
      </FormRow>

      <FormRow
        label="First Name"
        error={errors?.firstName?.message}
        customStyle={customStyle.at(0)}
        gridCols={numberColumns}
      >
        <Input
          type="text"
          id="firstName"
          defaultValue=""
          disabled={isWorking}
          {...register("firstName", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow
        label="Middle Name"
        error={errors?.middleName?.message}
        customStyle={showMoreDetails ? customStyle.at(0) : customStyle.at(1)}
        gridCols={numberColumns}
      >
        <Input
          type="text"
          id="middleName"
          defaultValue=""
          disabled={isWorking}
          {...register("middleName")}
        />
      </FormRow>

      <FormRow
        label="Last Name"
        error={errors?.lastName?.message}
        customStyle={customStyle.at(0)}
        gridCols={numberColumns}
      >
        <Input
          type="text"
          id="lastName"
          defaultValue=""
          disabled={isWorking}
          {...register("lastName", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow
        label="Suffix"
        error={errors?.suffix?.message}
        customStyle={showMoreDetails ? customStyle.at(0) : customStyle.at(1)}
        gridCols={numberColumns}
      >
        <Input
          type="text"
          id="suffix"
          defaultValue=""
          disabled={isWorking}
          {...register("suffix")}
        />
      </FormRow>

      <FormRow
        label="Email"
        error={errors?.email?.message}
        customStyle={customStyle.at(0)}
        gridCols={numberColumns}
      >
        <Input
          type="email"
          id="email"
          defaultValue=""
          disabled={isWorking}
          {...register("email")}
        />
      </FormRow>

      <FormRow
        label="Phone"
        error={errors?.phone?.message}
        customStyle={customStyle.at(0)}
        gridCols="grid"
        btntype="phone"
      >
        <PhoneStyled
          type="tel"
          id="phone"
          value={phone}
          name="phoneInput"
          defaultCountry="ng"
          disabled={isWorking}
          onChange={(e) => {
            if (e?.target?.value.length < 5) {
              e.target.value = "";
            } else {
              e?.target?.value;
            }
          }}
          {...register("phone")}
        />
      </FormRow>

      <FormRow
        label="Birthday"
        error={errors?.dob?.message}
        customStyle={showMoreDetails ? customStyle.at(0) : customStyle.at(1)}
        gridCols={numberColumns}
      >
        <Input
          type="date"
          id="dob"
          className="w-[100%]"
          disabled={isWorking}
          {...register("dob")}
        />
      </FormRow>

      <FormRow
        label="Website Address"
        error={errors?.website?.message}
        customStyle={showMoreDetails ? customStyle.at(0) : customStyle.at(1)}
        gridCols={numberColumns}
      >
        <Input
          type="text"
          id="website"
          defaultValue=""
          disabled={isWorking}
          {...register("website")}
        />
      </FormRow>

      <FormRow
        label="Facebook"
        error={errors?.facebook?.message}
        customStyle={showMoreDetails ? customStyle.at(0) : customStyle.at(1)}
        gridCols={numberColumns}
      >
        <Input
          type="text"
          id="facebook"
          defaultValue=""
          disabled={isWorking}
          {...register("facebook")}
        />
      </FormRow>

      <FormRow
        label="Instagram Handle"
        error={errors?.instagram?.message}
        customStyle={showMoreDetails ? customStyle.at(0) : customStyle.at(1)}
        gridCols={numberColumns}
      >
        <Input
          type="text"
          id="instagram"
          defaultValue=""
          disabled={isWorking}
          {...register("instagram")}
        />
      </FormRow>

      <FormRow
        label="X Handle"
        error={errors?.x?.message}
        customStyle={showMoreDetails ? customStyle.at(0) : customStyle.at(1)}
        gridCols={numberColumns}
      >
        <Input
          type="text"
          id="x"
          defaultValue=""
          disabled={isWorking}
          {...register("x")}
        />
      </FormRow>

      <FormRow
        label="Tiktok Handle"
        error={errors?.tiktok?.message}
        customStyle={showMoreDetails ? customStyle.at(0) : customStyle.at(1)}
        gridCols={numberColumns}
      >
        <Input
          type="text"
          id="tiktok"
          defaultValue=""
          disabled={isWorking}
          {...register("tiktok")}
        />
      </FormRow>

      <FormRow
        label="LinkedIn Handle"
        error={errors?.linkedIn?.message}
        customStyle={showMoreDetails ? customStyle.at(0) : customStyle.at(1)}
        gridCols={numberColumns}
      >
        <Input
          type="text"
          id="linkedIn"
          defaultValue=""
          disabled={isWorking}
          {...register("linkedIn")}
        />
      </FormRow>

      <FormRow
        label="Pinterest Handle"
        error={errors?.pinterest?.message}
        customStyle={showMoreDetails ? customStyle.at(0) : customStyle.at(1)}
        gridCols={numberColumns}
      >
        <Input
          type="text"
          id="pinterest"
          defaultValue=""
          disabled={isWorking}
          {...register("pinterest")}
        />
      </FormRow>

      <FormRow
        label="Youtube Handle"
        error={errors?.youtube?.message}
        customStyle={showMoreDetails ? customStyle.at(0) : customStyle.at(1)}
        gridCols={numberColumns}
      >
        <Input
          type="text"
          id="youtube"
          defaultValue=""
          disabled={isWorking}
          {...register("youtube")}
        />
      </FormRow>

      <FormRow
        label="Snapchat Handle"
        error={errors?.snapchat?.message}
        customStyle={showMoreDetails ? customStyle.at(0) : customStyle.at(1)}
        gridCols={numberColumns}
      >
        <Input
          type="text"
          id="snapchat"
          defaultValue=""
          disabled={isWorking}
          {...register("snapchat")}
        />
      </FormRow>

      <FormRow>
        <div
          className="flex cursor-pointer flex-row items-center gap-4"
          onClick={handleShowMoreDetails}
        >
          <span>{showMoreDetails ? "Show Less" : "Show More"}</span>
          {showMoreDetails ? (
            <MdOutlineExpandLess className="h-8 w-8" />
          ) : (
            <MdOutlineExpandMore className="h-8 w-8" />
          )}
        </div>
      </FormRow>

      <FormRow style={{ width: "auto" }}>
        <Button
          disabled={isWorking}
          $variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>

        <Button disabled={isWorking}>
          {isEditSession
            ? isEditing
              ? "Updating..."
              : "Update Contact"
            : isCreating
              ? "Creating..."
              : "Create Contact"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateContactForm;
