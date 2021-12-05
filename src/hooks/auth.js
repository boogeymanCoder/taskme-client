import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

/**
 * @description redirects user to (alternative) if there is no logged user
 * @param {string} alternative
 * @returns
 */
export function useAuthCheck(alternative) {
  const account = useSelector((state) => state.accountLog.account);
  const navigate = useNavigate();

  return useEffect(() => {
    if (!account) {
      console.log("navigating to login");
      navigate(alternative);
    }
  }, [account, alternative, navigate]);
}

/**
 * @description redirects user to (alternative) if there is a logged user
 * @param {string} alternative
 * @returns
 */
export function useNonAuthCheck(alternative) {
  const account = useSelector((state) => state.accountLog.account);
  const navigate = useNavigate();

  return useEffect(() => {
    if (account) navigate(alternative);
  }, [account, alternative, navigate]);
}
