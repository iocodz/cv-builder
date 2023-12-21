import { useStoreActions, useStoreState } from "easy-peasy";
import { CurriculumType } from "../_types";
import FormGroup from "./FormGroup";
import { StateType } from "../_lib/store";

export default function GeneralInformation() {  
    const curriculum: CurriculumType = useStoreState<StateType>((state) => state.curriculum);
  const setCurriculum = useStoreActions<StateType>((actions) => actions.setCurriculum);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof CurriculumType
  ) => {
    const { value } = event.target;
    setCurriculum({
      ...curriculum,
      [key]: value,
    });
  };
    return (
      <FormGroup title="Personal Information">
        <input
          required
          onChange={(e) => handleChange(e, "name")}
          type="text"
          placeholder="Name"
          className="input input-bordered w-full"
          defaultValue={curriculum.name}
        />
        <input
          required
          onChange={(e) => handleChange(e, "image")}
          type="text"
          placeholder="Avatar URL"
          className="input input-bordered w-full"
          defaultValue={curriculum.image}
        />
        <input
          required
          onChange={(e) => handleChange(e, "title")}
          type="text"
          placeholder="Professional title"
          className="input input-bordered w-full"
          defaultValue={curriculum.title}
        />
        <input
          required
          onChange={(e) => handleChange(e, "country")}
          type="text"
          placeholder="Location"
          className="input input-bordered w-full"
          defaultValue={curriculum.country}
        />
        <input
          required
          onChange={(e) => handleChange(e, "email")}
          defaultValue={curriculum.email}
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
        />
        <input
          required
          onChange={(e) => handleChange(e, "phone")}
          defaultValue={curriculum.phone}
          type="tel"
          placeholder="Phone"
          className="input input-bordered w-full"
        />
        <input
          required
          onChange={(e) => handleChange(e, "website")}
          defaultValue={curriculum.website}
          type="text"
          placeholder="Website"
          className="input input-bordered w-full"
        />
        <textarea
          onChange={(e) => handleChange(e, "about")}
          defaultValue={curriculum.about}
          placeholder="About"
          className="textarea textarea-bordered h-24 text-base"
        ></textarea>
      </FormGroup>
    );
  }
  