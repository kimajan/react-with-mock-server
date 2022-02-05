import { fetchLikedFormSubmissions } from "./service/mockServer";
import { saveFormSubmission } from "./service/mockServer";

export default async function List() {
  try {
    const fetchall = await fetchLikedFormSubmissions();
    const forms = fetchall.formSubmissions;
    const len = forms.length;

    if (len > 0) {
      const likedForm = {
        id: forms[len - 1].id,
        data: {
          email: forms[len - 1].data.email,
          firstName: forms[len - 1].data.firstName,
          lastName: forms[len - 1].data.lastName,
          liked: true,
        },
      };
      saveFormSubmission(likedForm);
    } else {
      return;
    }
  } catch (e) {
    return;
  }
}
