import "../../../api";
import api from "../../../api";

export function fetchExchange() {
  return api.get("");
}
