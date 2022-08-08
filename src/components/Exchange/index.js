import React from "react";
import { useDispatch, connect } from "react-redux";
import { FormGroup, Label, Input, Button, FormFeedback } from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { getSymbolsOptions, convert } from "../../services/index";
import useGetData from "../../services/getDataService";
import Select from "react-select";
import "./index.scss";

const Exchange = (props) => {
  const dispatch = useDispatch();
  const { data } = useGetData();
  const symbols = getSymbolsOptions(data);
  console.log(symbols);
  // form Settings
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  //  form submit
  const onSubmit = async (data) => {
    const response = await convert(
      data.to.label,
      data.from.label,
      data.amount
    ).then((res) => res);
    setTimeout(function () {
      dispatch({ type: "ADD_TO_HISTORY", data: response });
    }, 100);
  };

  return (
    <div className="exchange-box">
      <h2>Convert</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="Amount">Amount</Label>
          <Controller
            name="amount"
            control={control}
            {...register("amount", { required: true })}
            render={({ field }) => (
              <Input
                invalid={errors?.amount}
                id="amount"
                name="amount"
                placeholder="The amount to be converted."
                type="text"
                {...field}
              />
            )}
          />
          {errors?.amount && (
            <FormFeedback> This field is required</FormFeedback>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="from">From</Label>
          <Controller
            name="from"
            control={control}
            {...register("from", { required: true })}
            render={({ field }) => (
              <Select
                placeholder="The three-letter currency code of the currency you would like to convert from."
                isSearchable={true}
                options={symbols}
                onChange={(e) => console.log(e)}
                {...field}
              />
            )}
          />
          {errors?.from && (
            <div className="invalid-feedback d-block">
              This field is required
            </div>
          )}
        </FormGroup>

        <FormGroup>
          <Label for="to">To</Label>
          <Controller
            name="to"
            control={control}
            {...register("to", { required: true })}
            render={({ field }) => (
              <Select
                placeholder="The three-letter currency code of the currency you would like to convert to."
                isSearchable={true}
                options={symbols}
                onChange={(e) => console.log(e)}
                {...field}
              />
            )}
          />
          {errors?.to && (
            <div className="invalid-feedback d-block">
              This field is required
            </div>
          )}
        </FormGroup>

        <Button className="btn w-100" color="success" type="submit">
          Convert
        </Button>
      </form>
    </div>
  );
};
export default Exchange;
