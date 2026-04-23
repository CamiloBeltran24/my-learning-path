## Que son los Embeddings?

Los modelos LLM asignan a cada palabra una ubicacion matemtatica especifica en un espacio multidimensional.

esto les permite entender el contexto y las relaciones entre palabras. de esta manera la IA puede identificar similitudes entre palabras y frases.

# ¿Qué son los Embeddings?

**Los Embeddings son representaciones matemáticas que convierten texto, imágenes u otros datos en vectores (listas de números).** 

Ubicacion matemtatica especifica en un espacio multidimensional. 
Permiten que las computadoras "entiendan" el significado y las relaciones entre conceptos.

---

## 📐 ¿Cómo funcionan?

Imagina un espacio con miles de dimensiones. Cada palabra tiene su propia coordenada.

- **Palabras similares** = coordenadas cercanas 📏
- **Palabras diferentes** = coordenadas lejanas ❌

**Ejemplo simplificado:**

```
Vector(Rey) - Vector(Hombre) + Vector(Mujer)  ≈  Vector(Reina)
```

---

## 🛠️ Uso con IA (modelos LLM)

Los modelos LLM usan embeddings para:
1. Entender el contexto del prompt
2. Buscar información relevante
3. Generar respuestas coherentes

---

## 🔄 Modelos Populares

### OpenAI
- `text-embedding-3-large` (máxima calidad)
- `text-embedding-3-small` (más rápido)
- `text-embedding-2` (compatible con modelos legacy)

### Cohere
- `embed-v3.0`
- `embed-english-v3.0`

### Hugging Face
- **MiniLM**: muy eficiente para búsqueda
- **Sentence Transformers**: diferentes modelos según idioma y tamaño