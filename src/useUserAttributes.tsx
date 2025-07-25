// src/hooks/useUserAttributes.ts
import { useEffect, useState } from 'react';
import { fetchUserAttributes } from 'aws-amplify/auth';
import type { UserAttributeKey } from 'aws-amplify/auth';

export const useUserAttributes = () => {
  const [attributes, setAttributes] = useState<Partial<Record<UserAttributeKey, string>> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAttributes = async () => {
      try {
        const attrs = await fetchUserAttributes();
        setAttributes(attrs);
      } catch (error) {
        console.error("Error al obtener atributos del usuario:", error);
      } finally {
        setLoading(false);
      }
    };

    loadAttributes();
  }, []);

  return { attributes, loading };
};

