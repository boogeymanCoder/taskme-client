import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

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

export function useNonAuthCheck(alternative) {
  const account = useSelector((state) => state.accountLog.account);
  const navigate = useNavigate();

  return useEffect(() => {
    if (account) navigate(alternative);
  }, [account, alternative, navigate]);
}
