import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export function useAuthCheck(destination, alternative) {
  const account = useSelector((state) => state.accountLog.account);
  const navigate = useNavigate();

  return useEffect(() => {
    if (account) navigate(destination);
    else if (alternative) navigate(alternative);
  }, [account, destination, alternative, navigate]);
}

export function useNonAuthCheck(destination, alternative) {
  const account = useSelector((state) => state.accountLog.account);
  const navigate = useNavigate();

  return useEffect(() => {
    if (!account) navigate(destination);
    else if (alternative) navigate(alternative);
  }, [account, destination, alternative, navigate]);
}
