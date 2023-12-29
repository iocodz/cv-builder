import { useStoreActions, useStoreState } from "easy-peasy";
import { CurriculumType } from "../_types";
import FormGroup from "./FormGroup";
import { StateType } from "../_lib/store";
import { useTranslations } from "next-intl";

export default function GeneralInformation() {  
  const t = useTranslations('BUILDER');
  const { curriculum } : { curriculum: CurriculumType } = useStoreState<StateType>((state) => state.curriculum);
  const { setCurriculum } = useStoreActions<StateType>((actions) => actions.curriculum);

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

  const handleChangeImage = (e: any) => {
    const reader = new FileReader();
    reader.onload = async function (event: any) {
      // @ts-ignore
      let fichero = event.target.result.toString();
      let base64data = await btoa(fichero);
      console.log(base64data)
      setCurriculum({
        ...curriculum,
        image: "data:image/jpeg;base64," + base64data,
      });
    };
    reader.readAsBinaryString(e.target.files[0]);
    
  }

    return (
      <FormGroup title="personalInformation">
        <input
          required
          onChange={(e) => handleChange(e, "name")}
          type="text"
          placeholder={t('name')}
          className="input input-bordered w-full"
          defaultValue={curriculum.name}
        />
        <input
          required
          onChange={(e) => handleChangeImage(e)}
          type="file"
          className="file-input file-input-bordered"
          accept=".png,.jpg,.jpeg"
        />
        <input
          required
          onChange={(e) => handleChange(e, "title")}
          type="text"
          placeholder={t('professionalTitle')}
          className="input input-bordered w-full"
          defaultValue={curriculum.title}
        />
        <input
          required
          onChange={(e) => handleChange(e, "country")}
          type="text"
          placeholder={t('location')}
          className="input input-bordered w-full"
          defaultValue={curriculum.country}
        />
        <input
          required
          onChange={(e) => handleChange(e, "email")}
          defaultValue={curriculum.email}
          type="email"
          placeholder={t('email')}
          className="input input-bordered w-full"
        />
        <input
          required
          onChange={(e) => handleChange(e, "phone")}
          defaultValue={curriculum.phone}
          type="tel"
          placeholder={t('phone')}
          className="input input-bordered w-full"
        />
        <input
          required
          onChange={(e) => handleChange(e, "website")}
          defaultValue={curriculum.website}
          type="text"
          placeholder={t('website')}
          className="input input-bordered w-full"
        />
        <textarea
          onChange={(e) => handleChange(e, "about")}
          defaultValue={curriculum.about}
          placeholder={t('about')}
          className="textarea textarea-bordered h-24 text-base"
        ></textarea>
      </FormGroup>
    );
  }
  